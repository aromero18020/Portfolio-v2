const Texts = ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'GitHub', 'Agile', 'SCRUM', 'Java', 'Bootstrap' ];

var tagCloud = TagCloud('.Sphere', Texts, {
    // Sphere radius in px
    radius: 170,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 125,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: false
});

// Giving color to each text in sphere
var color = '#4c5e46';
document.querySelector('.Sphere').style.color = color;