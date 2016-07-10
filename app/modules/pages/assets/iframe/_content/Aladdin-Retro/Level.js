/**
    A class to represent the level
    @author <a href="mailto:thierry.prost@gmail.com">Thierry PROST</a>
    @class
*/
function Level()
{
    this.blocks = new Array();
    this.powerups = new Object;
    this.blockWidth = 64;
    this.blockHeight = 70;
    this.startupSound = new Audio("alad06a.mp3");
    var stage1Sound = new Audio("alad06b.mp3");

    /**
        Initialises this object
    */
    this.startupLevel = function (canvasWidth, canvasHeight) {

        this.startupSound.play();

        setTimeout(function () {
            var stage1Sound = new Audio("alad06b.mp3"); stage1Sound.play();stage1Sound.loop = true;}, 3668);

        this.blocks[0] = 1;
        this.blocks[1] = 1;
        this.blocks[2] = 1;
        this.blocks[3] = 2;
        this.blocks[4] = 1;
        this.blocks[5] = 1;
        this.blocks[6] = 1;
        this.blocks[7] = 1;
        this.blocks[8] = 1;
        this.blocks[9] = 1;
        this.blocks[10] = 1;
        this.blocks[11] = 2;
        this.blocks[12] = 3;
        this.blocks[13] = 1;
        this.blocks[14] = 1;
        this.blocks[15] = 1;
        this.blocks[16] = 1;
        this.blocks[17] = 1;
        this.blocks[18] = 1;
        this.blocks[19] = 1;
        this.blocks[20] = 1;
        this.blocks[21] = 1;
        this.blocks[22] = 1;
        this.blocks[23] = 1;
        this.blocks[24] = 1;
        this.blocks[25] = 1;
        this.blocks[26] = 1;
        this.blocks[27] = 1;
        this.blocks[28] = 1;
        this.blocks[29] = 1;
        this.blocks[30] = 1;
        this.blocks[31] = 1;
        this.blocks[32] = 1;
        this.blocks[33] = 1;
        this.blocks[34] = 1;
        this.blocks[35] = 1;
        this.blocks[36] = 1;
        this.blocks[37] = 1;
        this.blocks[38] = 1;
        this.blocks[39] = 1;
        this.blocks[40] = 1;
        this.blocks[41] = 1;
        this.blocks[42] = 1;
        this.blocks[43] = 1;
        this.blocks[44] = 1;
        this.blocks[45] = 1;
        this.blocks[46] = 1;
        this.blocks[47] = 1;
        this.blocks[48] = 1;
        this.blocks[49] = 1;
        this.blocks[50] = 1;
        this.blocks[51] = 1;
        this.blocks[52] = 1;
        this.blocks[53] = 1;
        this.blocks[54] = 1;
        this.blocks[55] = 1;
        this.blocks[56] = 1;
        this.blocks[57] = 1;
        this.blocks[58] = 1;
        this.blocks[59] = 1;
        this.blocks[60] = 1;
        this.blocks[61] = 1;
        this.blocks[62] = 1;
        this.blocks[63] = 1;
        this.blocks[64] = 1;
        this.blocks[65] = 1;
        this.blocks[66] = 1;
        this.blocks[67] = 1;
        this.blocks[68] = 1;
        this.blocks[69] = 1;
        this.blocks[70] = 1;
        this.blocks[71] = 1;
        this.blocks[72] = 1;
        this.blocks[73] = 1;
        this.blocks[74] = 1;
        this.blocks[75] = 1;
        this.blocks[76] = 1;
        this.blocks[77] = 1;
        this.blocks[78] = 1;
        this.blocks[79] = 1;
        this.blocks[80] = 1;
        this.blocks[81] = 1;
        this.blocks[82] = 1;
        this.blocks[83] = 1;
        this.blocks[84] = 1;
        this.blocks[85] = 1;
        this.blocks[86] = 1;
        this.blocks[87] = 1;
        this.blocks[88] = 1;
        this.blocks[89] = 1;
        this.blocks[90] = 1;
        this.blocks[91] = 1;
        this.blocks[92] = 1;
        this.blocks[93] = 1;
        this.blocks[94] = 1;
        this.blocks[95] = 1;
        this.blocks[96] = 1;
        this.blocks[97] = 1;
        this.blocks[98] = 1;
        this.blocks[99] = 1;
        this.blocks[100] = 1;
        this.blocks[101] = 1;
        this.blocks[102] = 1;
        this.blocks[103] = 1;
        this.blocks[104] = 1;
        this.blocks[105] = 1;
        this.blocks[106] = 1;
        this.blocks[107] = 1;
        this.blocks[108] = 1;
        this.blocks[109] = 1;
        this.blocks[110] = 1;
        this.blocks[111] = 1;
        this.blocks[112] = 1;
        this.blocks[113] = 1;
        this.blocks[114] = 1;
        this.blocks[115] = 1;
        this.blocks[116] = 1;
        this.blocks[117] = 1;
        this.blocks[118] = 1;
        this.blocks[119] = 1;
        this.blocks[120] = 1;
        this.blocks[121] = 1;
        this.blocks[122] = 1;
        this.blocks[123] = 1;
        this.blocks[124] = 1;
        this.blocks[125] = 1;
        this.blocks[126] = 1;
        this.blocks[127] = 1;
        this.blocks[128] = 1;
        this.blocks[129] = 1;
        this.blocks[130] = 1;
        this.blocks[131] = 1;

        this.powerups['1'] = 'Gem';
        this.powerups['6'] = 'Gem';
        this.powerups['10'] = 'Gem';
        this.powerups['131'] = 'LevelEndPost';

        this.addBlocks(canvasWidth, canvasHeight);
        this.addPowerups(canvasWidth, canvasHeight);

        return this;
    }

    /**
        Adds the blocks to the screen by creating VisualGameObjects
    */
    this.addBlocks = function(canvasWidth, canvasHeight)
    {
        for (var x = 0; x < this.blocks.length; ++x)
        {
            for (var y = 0; y < this.blocks[x]; ++y)
            {
                new VisualGameObject().startupVisualGameObject(g_ResourceManager.block, x * this.blockWidth, canvasHeight - (y + 1) * this.blockHeight, 4);
            }
        }
    }

    this.addPowerups = function(canvasWidth, canvasHeight)
    {
        for (var x = 0; x < this.blocks.length; ++x)
        {
            if (this.powerups[x])
            {
                var xPosition = x * this.blockWidth + this.blockWidth / 2;
                var yPosition = canvasHeight - this.groundHeight(x);

                switch(this.powerups[x])
                 {
                    case 'Gem':
                        new Powerup().startupPowerup(10, g_ResourceManager.gem, xPosition - g_ResourceManager.gem.width / 2, yPosition - g_ResourceManager.gem.height, 4, 1, 1);
                        break;
                    case 'LevelEndPost':
                        new LevelEndPost().startupLevelEndPost(g_ResourceManager.portal, xPosition - g_ResourceManager.portal.width / 2 / 4, yPosition - g_ResourceManager.portal.height, 4);
                        break;
                 }
            }
        }
    }

    /**
        @return     The block under the specified x position
        @param x    The x position to test
    */
    this.currentBlock = function(x)
    {
        return parseInt( x / this.blockWidth);
    }
    
    /**
        @return             The hieght of the ground under the specified block
        @param blockIndex   The block number
    */
    this.groundHeight = function(blockIndex)
    {
        if (blockIndex < 0 || blockIndex > this.blocks.length) return 0;

        return this.blocks[blockIndex] *  this.blockHeight;
    }
}