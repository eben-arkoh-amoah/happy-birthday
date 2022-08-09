function hello() {
    let button = document.querySelector("button");
    button.className += ("btn")

    let message = document.querySelector(".message");
    message.className += (" message-animation")
   
    let heart = document.querySelector(".heart");
    heart.className += " heart-animtion";

    textArea = document.querySelector("textarea")
    textArea.createContent("hello world")
}
