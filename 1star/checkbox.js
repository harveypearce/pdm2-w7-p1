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


class Checkbox extends CollisionRect{
    #lable;
    #checked;

    static DISABLED = 'disabled';
    static ENABLED = 'enabled';
    static HOVER = 'hover';
    #state = Checkbox.ENABLED;

    constructor(x, y, w, h ){
        super();
        this.setPosition(x, y);
        this.setDimensions(w, h);
        this.#lable = "Checked";
        this.#checked = false;
    
    }

    draw(){
        rectMode(CORNER);

        switch(this.#state){
            case Checkbox.DISABLED:
                fill(0);
                break;
            case Checkbox.ENABLED:
                fill(255);
                break;
            case Checkbox.HOVER:
                fill(123);
                break;
        }
        
        
        rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
        fill(0);
        textAlign(CENTER, CENTER);
        if(this.#checked){
            this.#lable = "Unchecked"
        } else{
            this.#lable = "Checked"
        }
        text(this.#lable, this.getX(), this.getY(),this.getWidth(), this.getHeight());

    }

    isChecked(){
        return this.#checked;
    }

    checkHover(x, y){
        if(this.isChecked() !== Checkbox.DISABLED){
            if(this.containsPoint(x, y)){
                this.#state = Checkbox.HOVER;
            } else {
                this.#state = Checkbox.ENABLED
            }
        }
    }
    checkClicked(x, y){
        if(this.isChecked() !== Checkbox.DISABLED && this.containsPoint(x,y)){
            if(this.#checked === false){
                this.#checked = true;
            } else{
                this.#checked = false;
            }

        }

    }
}