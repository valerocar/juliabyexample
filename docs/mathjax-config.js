window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        macros: {
            RR: "{\\bf R}",
            bold: ["{\\bf #1}", 1],
            pde: ["{\\frac{\\partial #1}{\\partial #2}}",2]
        }
    },
    svg: {
        fontCache: 'global'
    }

};