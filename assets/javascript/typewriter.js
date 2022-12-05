var textColor = '#4c5e46';
var textWeight = 'bold';
var app = document.getElementById('aboutMe');
var typewriter = new Typewriter(app, {
    loop: true,
    delay: 25,
    autoStart: false,
});

document.querySelector('#aboutMe').style.color = textColor;
document.querySelector('#aboutMe').style.fontWeight = textWeight;
typewriter
.pauseFor(800)
.typeString('Hello World! I am a current Junior Web Development student at Generation USA with an interest and passion for software development.')
.pauseFor(100)
.typeString('I have always had a strong interest in technology and the thought process of how and why things work. I recently decided to further my technical journey and have since learned HTML, CSS, JavaScript, Java, SQL, SCRUM, and Agile. ')
.typeString('I am excited to work with other developers, develop my skills, and build additional projects. ')
.typeString('I look forward to what the future holds!')
.pauseFor(800)
.start();