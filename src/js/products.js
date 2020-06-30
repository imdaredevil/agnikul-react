import $ from 'jquery';


export default function Init() {    


var _containerHeight = 4000;
var _width, _height, _scrollHeight;
var _movingElements = [];
var _scrollPercent = 0;
var pre;
var _jsPrefix;
var _cssPrefix;



var transitions = [
    {
        selector: ".first-scroll-content,.first-scroll-specs",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.0,
        percentEnd: 0.015,
        percentBefore: -1,
        percentAfter: 1.1,
    },
    {
        selector: ".second-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.110,
        percentEnd: 0.135,
        percentBefore: -1,
        percentAfter: 0.255
    },
    {
        selector: ".second-scroll",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.255,
        percentEnd: 0.27,
        percentBefore: 0.135,
        percentAfter: 1.1,
    },
    {
        selector: ".third-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.36,
        percentEnd: 0.375,
        percentBefore: -1,
        percentAfter: 0.495,
    },
    {
        selector: ".third-scroll",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.495,
        percentEnd: 0.51,
        percentBefore: 0.375,
        percentAfter: 1.1,
    },
    {
        selector: ".fourth-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.600,
        percentEnd: 0.615,
        percentBefore: -1,
        percentAfter: 0.735,
    },
    {
        selector: ".fourth-scroll",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.735,
        percentEnd: 0.75,
        percentBefore: 0.615,
        percentAfter: 1.1,
    },
    {
        selector: ".fifth-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.855,
        percentEnd: 0.975,
        percentBefore: -1,
        percentAfter: 1.1,
    },
    {
        selector: ".rocket-horizontal",
        before: [
            ["transform", [
                ["translate", -50,0],
            ]
            ]
        ],
        after: [
            ["transform", [
                ["translate", -50,0],
                ["scale", 1.9, 1.65]
            ]
            ]
        ],
        on: [
            ["transform", [
                ["translate", {
                    start: -50,
                    end: -50
                },
                    {
                        start: 0,
                        end: 0
                    }
                ],
                ["scale", {
                    start: 1,
                    end: 1.9
                },
                    {
                        start: 1,
                        end: 1.65
                    }]
            ]
            ]
        ],
        percentStart: 0.015,
        percentEnd: 0.135,
        percentBefore: -1,
        percentAfter:  0.735,
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.015,
        percentEnd: 0.135,
        percentBefore: -1,
        percentAfter:  0.255,

        before: [
            ["left",50],
            ["top",40]
        ],
        after: [
            ["left",135],
            ["top",40]
        ],
        on: [
            ["left",{start: 50, end: 135}],
            ["top",{start: 40, end: 40}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.255,
        percentEnd: 0.375,
        percentBefore: 0.135,
        percentAfter:  0.495,

        before: [
            ["left",135],
            ["top",40]
        ],
        after: [
            ["left",100],
            ["top",40]
        ],
        on: [
            ["left",{start: 135, end: 100}],
            ["top",{start: 40, end: 40}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.495,
        percentEnd: 0.615,
        percentBefore: 0.375,
        percentAfter:  0.735,

        before: [
            ["left",100],
            ["top",40]
        ],
        after: [
            ["left",52],
            ["top",40]
        ],
        on: [
            ["left",{start: 100, end: 52}],
            ["top",{start: 40, end: 40}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        before: [
            ["transform", [
                ["translate", -50,0],
                ["scale", 1.9, 1.65]
            ]
            ]
        ],
        on: [
            ["transform",[
                ["translate",{
                    start: -50,
                    end: -50
                },
                {
                    start: 0,
                    end: 0
                }
            ],
            ["scale",{
                start: 1.9,
                end: 0.35
            },
            {
                start: 1.65,
                end: 0.35
            }
        ]
            ]
        ]
        ],
        after: [
            ["transform",[
                ["translate",-50,0],
                ["scale",0.35,0.35]
            ]
        ]
        ],
        percentStart: 0.735,
        percentBefore: 0.135,
        percentAfter: 0.855,
        percentEnd: 0.805
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.735,
        percentBefore: 0.615,
        percentAfter: 0.805,
        percentEnd: 0.805,

        before: [
            ["left",52],
            ["top",40]
        ],
        after: [
            ["left",54],
            ["top",53]
        ],
        on: [
            ["left",{start: 52, end: 54}],
            ["top",{start: 40, end: 53}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.805,
        percentBefore: 0.805,
        percentAfter: 1.1,
        percentEnd: 0.855,

        before: [
            ["left",54],
            ["top",53]
        ],
        after: [
            ["left",54],
            ["top",60]
        ],
        on: [
            ["left",{start: 54, end: 54}],
            ["top",{start: 53, end: 60}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        before:  [
            ["transform",[
                ["translate",-50,0],
                ["scale",0.35,0.35]
            ],
        ]
        ],
        on: [
            ["transform",[
                ["translate",{
                    start: -50,
                    end: -50
                },
                {
                    start: 0,
                    end: 0
                }
            ],
            ["scale",{
                start: 0.35,
                end: 0.35
            },
            {
                start: 0.35,
                end: 0.35
            },
        ],
            ["rotate",{
                    start: 0,
                    end: 90
            }
        ]
            ]
        ]
        ],
        after: [
            ["transform",[
                ["translate",-50,0],
                ["scale",0.35,0.35],
                ["rotate",90]
            ]
        ]
        ],
        percentStart: 0.855,
        percentBefore: 0.805,
        percentAfter: 1.1,
        percentEnd: 0.975
    },
    {
        selector: ".stand",
        before:  [
            ["transform",[
                ["rotate",0],
            ],
        ]
        ],
        on: [
            ["transform",[
            ["rotate",{
                    start: 0,
                    end: 90
            }
        ]
            ]
        ]
        ],
        after: [
            ["transform",[
                ["rotate",90]
            ]
        ]
        ],
        percentStart: 0.857,
        percentBefore: 0.805,
        percentAfter: 1.1,
        percentEnd: 0.975
    },
    {
        selector: ".rocket-3",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.1
                }
            ]
        ],
        after: [
            ["opacity", 0.1]
        ],
        percentStart: 0.015,
        percentEnd: 0.135,
        percentBefore: -1,
        percentAfter: 0.495,
    },
    {
        selector: ".rocket-3",
        before: [
            ["opacity", 0.1]
        ],
        on: [
            ["opacity",
                {
                    start: 0.1,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.495,
        percentEnd: 0.615,
        percentBefore: 0.135,
        percentAfter: 1.1,
    },
    {
        selector: ".rocket-2",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.1
                }
            ]
        ],
        after: [
            ["opacity", 0.1]
        ],
        percentStart: 0.015,
        percentEnd: 0.135,
        percentBefore: -1,
        percentAfter: 0.255,
    },
    {
        selector: ".rocket-2",
        before: [
            ["opacity", 0.1]
        ],
        on: [
            ["opacity",
                {
                    start: 0.1,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.255,
        percentEnd: 0.375,
        percentBefore: 0.135,
        percentAfter: 1.1,
    },
    {
        selector: ".rocket-1",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.1
                }
            ]
        ],
        after: [
            ["opacity", 0.1]
        ],
        percentStart: 0.255,
        percentEnd: 0.375,
        percentBefore: -1,
        percentAfter: 0.615
    },
    {
        selector: ".rocket-1",
        before: [
            ["opacity", 0.1]
        ],
        on: [
            ["opacity",
                {
                    start: 0.1,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.615,
        percentEnd: 0.62,
        percentBefore: 0.375,
        percentAfter: 1.1,
    },
    {
        selector: '.truck',
        before: [
            ["opacity",0],
        ],
        on: [
            ["opacity",{
                start: 0,
                end: 1
            }]
        ],
        after: [
            ["opacity",1]
        ],
        percentStart: 0.405,
        percentEnd: 0.555,
        percentBefore: -1,
        percentAfter: 1.1
    },
    {
        selector: '.stand',
        before: [
            ["opacity",0],
        ],
        on: [
            ["opacity",{
                start: 0,
                end: 1
            }]
        ],
        after: [
            ["opacity",1]
        ],
        percentStart: 0.405,
        percentEnd: 0.555,
        percentBefore: -1,
        percentAfter: 1.1
    },
    {
        selector: ".truck",
        percentStart: 0.735,
        percentBefore: -1,
        percentAfter: 1.1,
        percentEnd: 0.815,

        before: [
            ["left",100],
            ["top",70]
        ],
        after: [
            ["left",52],
            ["top",70]
        ],
        on: [
            ["left",{start: 100, end: 52}],
            ["top",{start: 70, end: 70}]   
        ]
    },
    {
        selector: ".stand",
        percentStart: 0.735,
        percentBefore: -1,
        percentAfter: 1.1,
        percentEnd: 0.815,

        before: [
            ["left",112.5],
            ["top",72]
        ],
        after: [
            ["left",64.5],
            ["top",72]
        ],
        on: [
            ["left",{start: 112.5, end: 64.5}],
            ["top",{start: 72, end: 72}]   
        ]
    }

]



function prefix() {
    var styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
        )[1],
        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
    };
}

function resize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    _scrollHeight = _containerHeight - _height;
}

function constructTransform(transforms) {
    var result = "";
    for (var transform in transforms) {
        transform = transforms[transform];
        result += transform[0] + "(";
        if (transform[0] == "translate")
            result += transform[1] + "%," + transform[2] + "%";
        else if(transform[0] == "rotate")
            result += transform[1] + "deg";
        else
            result += transform[1] + "," + transform[2];
        result += ") ";
    }
    if (result == "")
        return "none";
    else
        return result;
}

function constructTransformInProgress(transforms, effectScrollPercent) {
    var result = "";
    for (var transform in transforms) {
        transform = transforms[transform];
        result += transform[0] + "(";
        var val1 = transform[1].start + (transform[1].end - transform[1].start) * effectScrollPercent;
        if(transform[0] != "rotate")
        var val2 = transform[2].start + (transform[2].end - transform[2].start) * effectScrollPercent;
        if (transform[0] == "translate")
            result += val1 + "%," + val2 + "%";
        else if(transform[0] == "rotate")
            result += val1 + "deg";
        else
            result += val1 + "," + val2;
        result += ") ";
    }
    if (result == "")
        return "none";
    else
        return result;
}

function loop() {

   var _scrollOffset = window.pageYOffset || window.scrollTop;
   var  _scrollPercent = _scrollOffset / _scrollHeight || 0;

    for (var transition in transitions) {
        transition = transitions[transition];
        if (_scrollPercent < transition.percentStart && _scrollPercent > transition.percentBefore) {
            for (var effect in transition.before) {
                effect = transition.before[effect];
                if (effect[0] == "transform")
                    $(transition.selector).css(effect[0], constructTransform(effect[1]));
                else if(effect[0] == "left" || effect[0] == "top")
                $(transition.selector).css(effect[0], effect[1] + "%")
                else 
                    $(transition.selector).css(effect[0], effect[1])
            }
        }
        else if (_scrollPercent > transition.percentEnd && _scrollPercent < transition.percentAfter) {
            for (var effect in transition.after) {
                effect = transition.after[effect];
                if (effect[0] == "transform")
                    $(transition.selector).css(effect[0], constructTransform(effect[1]));
                else if(effect[0] == "left" || effect[0] == "top")
                    $(transition.selector).css(effect[0], effect[1] + "%")
                else
                    $(transition.selector).css(effect[0], effect[1])
            }
        }
        else if(_scrollPercent >= transition.percentStart && _scrollPercent <= transition.percentEnd){
            var effectScrollPercent = (_scrollPercent - transition.percentStart);
            effectScrollPercent /= (transition.percentEnd - transition.percentStart);
            for (var effect in transition.on) {
                effect = transition.on[effect];
                var value;
                if (effect[0] == "transform")
                    value = constructTransformInProgress(effect[1], effectScrollPercent);
                else
                    value = effect[1].start + (effect[1].end - effect[1].start) * effectScrollPercent;
                if(effect[0] == "left" || effect[0] == "top")
                    $(transition.selector).css(effect[0], value + "%")
                else
                    $(transition.selector).css(effect[0], value);
            }
        }

    }

    requestAnimationFrame(loop);
}

$(document).ready(function () {
    $("body").addClass("products");
    pre = prefix();
    _jsPrefix = pre.lowercase;
    if (_jsPrefix == 'moz')
        _jsPrefix = 'Moz';
    _cssPrefix = pre.css;
    resize();

    $(window).on('resize', resize());
    loop();

});

}