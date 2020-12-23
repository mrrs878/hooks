/*
 * @Author: your name
 * @Date: 2020-12-23 17:52:01
 * @LastEditTime: 2020-12-23 19:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsLibrary/src/react/useDrop.ts
 */
import { useMemo } from 'react';

interface DropAreaState {
  isHovering: boolean;
}

interface DropProps {
  onDragOver: React.DragEventHandler;
  onDragenter: React.DragEventHandler;
  onDragLeave: React.DragEventHandler;
  onDrop: React.DragEventHandler;
  onPaste: React.ClipboardEventHandler;
}

interface DropAreaOptions {
  onFiles?: (file: Array<File>, event?: React.DragEvent) => void;
  onUri?: (url: string, event?: React.DragEvent) => void;
}
