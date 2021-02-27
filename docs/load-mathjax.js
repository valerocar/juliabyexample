window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        macros: {
            RR: "{\\bf R}",
            bold: ["{\\bf #1}", 1],
            pde: ["{\\frac{\\partial #1}{\\partial #2}}", 2]
        }
    },
    svg: {
        fontCache: 'global'
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();