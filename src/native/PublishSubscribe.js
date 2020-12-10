var PublishSubscribe = {
    events: {},
    maxWatchers: 10,
    on: function (event, handler) {
        if (this.events[event]) {
            if (this.events[event].length >= this.maxWatchers) {
                console.error("too much " + event + " watchers");
                return;
            }
            this.events[event].push(handler);
        }
        else
            this.events[event] = [handler];
    },
    addEventListener: function (event, handler) {
        this.on(event, handler);
    },
    once: function (event, handler) {
        var _this = this;
        var wrapper = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            handler.apply(_this, rest);
            _this.removeHandler(event, wrapper);
        };
        this.on(event, wrapper);
    },
    removeHandler: function (event, handler) {
        var events = this.events[event];
        if (!events)
            return;
        this.events[event] = events.filter(function (item) { return item !== handler; });
    },
    removeAllHandlers: function (event) {
        this.events[event] = [];
    },
    setMaxWatchers: function (maxWatchers) {
        this.maxWatchers = maxWatchers;
    },
    emit: function (event) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var events = this.events[event];
        if (!events)
            return;
        events.forEach(function (item) { return item.apply(_this, rest); });
    },
};
export default PublishSubscribe;
