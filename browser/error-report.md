## 错误捕获与上报模块
´´´js
(function () {
    const reportError = (errorInfo) => {
        fetch('/error-report', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url: window.location.href,
                userAgent: navigator.userAgent,
                time: new Date().toISOString(),
                ...errorInfo
            })
        });
    };

    // 捕获运行时错误
    window.onerror = (message, source, lineno, colno, error) => {
        reportError({ type: 'runtime', message, source, lineno, colno, stack: error?.stack });
    };

    // 捕获资源加载错误
    window.addEventListener('error', (event) => {
        if (event.target !== window) {
            reportError({ type: 'resource', target: event.target.tagName, source: event.target.src || event.target.href });
        }
    }, true);

    // 捕获未处理的 Promise 错误
    window.onunhandledrejection = (event) => {
        reportError({ type: 'unhandledrejection', reason: event.reason });
    };
})();
´´´