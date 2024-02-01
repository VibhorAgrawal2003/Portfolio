function turtle_click_function(){
    const score_label = document.getElementById("score");
    score = parseInt(score_label.textContent);
    score += 1;
    score_label.textContent = score;
    update_achievement(score);
}

function update_achievement(score){
    if(score == 1){
        const achievement = document.getElementById("achievement-1");
        const description = document.getElementById("description-1");

        achievement.textContent = "I like turtles";
        description.textContent = "You started your journey to become a turtlemaster!";
    }

    else if(score == 50){
        const achievement = document.getElementById("achievement-2");
        const description = document.getElementById("description-2");

        achievement.textContent = "Player One";
        description.textContent = "You unlocked the baseball cap by petting over 50 times.";
    }

    else if(score == 100){
        const achievement = document.getElementById("achievement-3");
        const description = document.getElementById("description-3");

        achievement.textContent = "Cool Guy Turtle";
        description.textContent = "You unlocked the cool shades by petting over 100 times.";
    }

    else if(score == 200){
        const achievement = document.getElementById("achievement-4");
        const description = document.getElementById("description-4");

        achievement.textContent = "Shell Shocker";
        description.textContent = "You unlocked the combat helmet by petting over 200 times.";
    }

    else if(score == 500){
        const achievement = document.getElementById("achievement-5");
        const description = document.getElementById("description-5");

        achievement.textContent = "Here Comes Another";
        description.textContent = "You unlocked the mini turtle by petting over 500 times.";
    }

    else if(score == 1000){
        const achievement = document.getElementById("achievement-6");
        const description = document.getElementById("description-6");

        achievement.textContent = "Rise of The Turtlemaster";
        description.textContent = "You unlocked the golden turtle for petting over 1000";
    }
}