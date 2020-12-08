/*
 * @Author: your name
 * @Date: 2020-12-07 22:18:45
 * @LastEditTime: 2020-12-08 22:25:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\react\components\MScreen.js
 */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import html2Canvas from 'html2canvas';

const SCREENSHOT_STATE = {
  pending: 0,
  screening: 1,
  screened: 2,
};

const MScreenshot = ({ onFinish = (e: any) => {}, proxy = '' }) => {
  const screenBorderDOM = useRef<HTMLDivElement>(null);
  const screenCanvasDOM = useRef<HTMLCanvasElement>(null);
  const [screenPosition, setScreenPosition] = useState({ left: 0, top: 0 });
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [screenState, setScreenState] = useState(SCREENSHOT_STATE.pending);

  const onMouseMove = useCallback((e) => {
    if (!screenCanvasDOM) return;
    const width = e.pageX - parseInt(screenBorderDOM.current?.style.left || '', 10);
    const height = e.pageY - parseInt(screenBorderDOM.current?.style.top || '', 10);
    setScreenSize(() => ({ width, height }));
  }, [screenBorderDOM]);

  const onMouseDown = useCallback((e) => {
    const left = e.pageX;
    const top = e.pageY;
    document.addEventListener('mousemove', onMouseMove);
    setScreenPosition(() => ({ left, top }));
  }, []);

  const onMouseUp = useCallback(() => {
    setScreenState(SCREENSHOT_STATE.screened);
  }, [screenSize]);

  const resetEvent = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  }, []);

  const reset = useCallback(() => {
    setScreenSize({ width: 0, height: 0 });
    setScreenState(SCREENSHOT_STATE.pending);
    resetEvent();
  }, [resetEvent]);

  useEffect(() => {
    (async () => {
      if (screenState === SCREENSHOT_STATE.screened) {
        try {
          const { width, height } = screenSize;
          const { top, left } = screenPosition;
          const container = document.querySelector<HTMLDivElement>('#container')
           || document.createElement('div');
          const res = await html2Canvas(container, { proxy });
          const image = new Image();
          const url = res.toDataURL('image/png');
          image.crossOrigin = 'Anonymous';
          image.src = url;
          image.onload = () => {
            const ctx = screenCanvasDOM.current?.getContext('2d');
            ctx?.drawImage(image, left, top, width, height, 0, 0, width, height);
          };
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [screenState, screenPosition, screenSize]);

  const onCancelScreenClick = useCallback(() => {
    reset();
  }, [reset]);
  const onFinishScreenClick = useCallback(() => {
    reset();
    onFinish(screenCanvasDOM.current?.toDataURL());
  }, [reset, onFinish]);

  const onScreenShotClick = useCallback(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    setScreenState(SCREENSHOT_STATE.screening);
  }, []);

  return (
    <div>
      <div id="screenBg" style={{ display: screenState === SCREENSHOT_STATE.pending ? 'none' : 'block' }} />
      <div
        id="screenBorder"
        ref={screenBorderDOM}
        style={{
          left: screenPosition.left,
          top: screenPosition.top,
          width: screenSize.width,
          height: screenSize.height,
          border: screenState === SCREENSHOT_STATE.screening ? '1px solid #f00' : 'none',
        }}
      />
      <div
        draggable
        id="screenToast"
        style={{
          left: screenPosition.left,
          top: screenPosition.top,
          width: screenSize.width,
          height: screenSize.height,
          display: screenState === SCREENSHOT_STATE.screened ? 'block' : 'none',
        }}
      >
        <canvas height={screenSize.height} width={screenSize.width} ref={screenCanvasDOM} />
        <div className="actions">
          <button type="button" onClick={onCancelScreenClick}>✖</button>
          <button type="button" onClick={onFinishScreenClick}>✔</button>
        </div>
      </div>
      <button type="button" disabled={screenState !== SCREENSHOT_STATE.pending} onClick={onScreenShotClick}>截图</button>
    </div>
  );
};

export default MScreenshot;
