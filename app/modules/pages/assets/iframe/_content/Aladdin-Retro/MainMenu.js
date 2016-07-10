/**
    The main menu screen
    @author <a href="mailto:thierry.prost@gmail.com">Thierry PROST</a>
    @class
*/
function MainMenu() 
{
    this.intro = new Audio("alad04.mp3");
        
    this.startupMainMenu = function () {

        this.startupVisualGameObject(g_ResourceManager.mainmenu, 0, 0, 1);

        this.intro.loop = true;
        this.intro.play();

        return this;
    }

    /**
        Called when a key is pressed
        @param event Event Object
    */
    this.keyDown = function (event) {
        this.intro.pause();
        g_ApplicationManager.startLevel();
    }
}

MainMenu.prototype = new VisualGameObject;