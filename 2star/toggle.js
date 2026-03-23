class CollisionRect {
    #x;
    #y;
    #w;
    #h

    constructor() {}

    /**
     * Gets the x coordinate of the rect
     * @returns {number}
     */
    getX() {
        return this.#x;
    }


    /**
     * Gets the y coordinate of the rect
     * @returns {number}
     */
    getY() {
        return this.#y;
    }


    /**
     * Gets the width of the rect
     * @returns {number}
     */
    getWidth() {
        return this.#w;
    }


    /**
     * Gets the height of the rect
     * @returns {number}
     */
    getHeight() {
        return this.#h;
    }


    /**
     * Set the collision rect's position
     * @param {number} x 
     * @param {number} y 
     */
    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
    }


    /**
     * Sets the dimensions of the collision rect
     * @param {number} radius 
     */
    setDimensions(width, height) {
        this.#w = width;
        this.#h = height;
    }


    /**
     * Checks if the rectangle contains the point
     * @param {number} x 
     * @param {number} y 
     */
    containsPoint(x, y) {
        return x >= this.#x && x <= this.#x + this.#w 
                && y >= this.#y && y <= this.#y + this.#h;
    }

}



class Toggle extends CollisionRect{



    #switchXOn;
    #switchYOn;
    #switchXOff;
    #switchYOff;
    #speed;
    static OFF = 'off';
    static ON = 'on';
    static TURNING_ON = 'turning on'
    static TURNING_OFF = 'turning_off';



    #state = Toggle.OFF;

    constructor(x,y, w, h){
        super();
        this.setDimensions(w, h)
        this.setPosition(x, y);
        this.#switchX = this.getX();
        this.#switchY = this.getY();
        this.#speed = 5;

    }

    draw(){
        rectMode(CORNER);
        fill(123,0,0)
        rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
        fill(0,123,0)
        rect(this.#switchX, this.#switchY, this.getWidth()/2, this.getHeight()/2)
        
    }

    flip(){
        if(this.#state === Toggle.OFF){
            this.#state = Toggle.TURNING_ON;
            this.#speed = 






        
            this.#state = Toggle.ON;
        } else{
            this.#state = Toggle.OFF;
        }
    }
}