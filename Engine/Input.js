class Input {
    static keys = []; // Keys that are currently down as reported by js events
    static keysDown = []; //Keys that went down this frame as reported by js events
    static keysUp = []; //Keys that went up this frame as reported by js events
    static frameKeysDown = []; //Keys that will be reported as going down next frame
    static frameKeysUp = [];  //Keys that will be reported as going up next frame
  
    static mouseButtons = []; //Mouse buttons that are currently down as reported by js events
    static mouseButtonsDown = []; //Mouse buttons that went down sometime this frame as reported by js events
    static mouseButtonsUp = []; //Mouse buttons that went up sometime this frame as reported by js events
    static frameMouseButtonsDown = []; //Mouse buttons that will be reported as going down next frame
    static frameMouseButtonUp = []; //Mouse buttons that will be reported as going up next frame
  
    static mousePositionX; //Mouse position x as reported by js events
    static mousePositionY; //Mouse position y as report by js events
    static frameMousePositionX; //The mouse position x that will be reported next frame
    static frameMousePositionY; //The mouse position y that will be reported next frame
    static lastFrameMousePositionX; //The mouse x position from the previously reported frame
    static lastFrameMousePositionY; //The mouse y position from the previously reported frame
  
    static scrollWheel = 0; //The scroll wheel position as report by js events
    static frameScrollWheel = 0; //The scroll wheel change that will be reported next frame
  
    //Update the frame-centric variables
    static update() {
      this.frameKeysDown = this.keysDown;
      this.frameKeysUp = this.keysUp;
      this.keysDown = [];
      this.keysUp = [];
  
      this.frameMouseButtonsDown = this.mouseButtonsDown;
      this.frameMouseButtonsUp = this.mouseButtonsUp;
      this.mouseButtonsDown = [];
      this.mouseButtonsUp = [];
  
      this.lastFrameMousePositionX = this.frameMousePositionX
      this.lastFrameMousePositionY = this.frameMousePositionY
  
      this.frameMousePositionX = this.mousePositionX;
      this.frameMousePositionY = this.mousePositionY;
  
      this.frameScrollWheel = this.scrollWheel;
      this.scrollWheel = 0;
    }
  
    //Get the values of different input states
  
    static getKey(key) {
      return this.keys[key];
    }
    static getKeyDown(key) {
      return this.frameKeysDown[key];
    }
    static getKeyUp(key) {
      return this.frameKeysUp[key];
    }
  
    static getMouseButton(button) {
      return this.mouseButtons[button];
    }
    static getMouseButtonDown(button) {
      return this.frameMouseButtonsDown[button];
    }
    static getMouseButtonUp(button) {
      return this.frameMouseButtonsUp[button];
    }
  
    static getScrollWheel() {
      return this.frameScrollWheel;
    }
  
    static getMousePosition() {
      return this.frameMousePosition;
    }
    static getMousePositionDelta() {
      return Vector2.subtract(this.frameMousePosition, this.lastFrameMousePosition);
    }
  
  
    static attach(document) {
      //Setup all the key listeners
      document.body.addEventListener('keydown', keydown);
      document.body.addEventListener('keyup', keyup);
      document.body.addEventListener('keypress', keypress);
      document.body.addEventListener('mousedown', mousedown);
      document.body.addEventListener('mouseup', mouseup);
      document.body.addEventListener('mousemove', mousemove);
      document.body.addEventListener('wheel', wheelevent);
      document.body.addEventListener('contextmenu', contextmenu);
  
      function keydown(event) {
        // console.log("Down: " + event.key);
        if (Input.keys[event.key] != true)
          Input.keysDown[event.key] = true;
        Input.keys[event.key] = true;
      }
  
      function keyup(event) {
        //console.log("Up: " + event.key)
        if (Input.keys[event.key] != false)
          Input.keysUp[event.key] = true;
        Input.keys[event.key] = false;
      }
  
      function mousedown(event) {
        //console.log("Mouse Down: " + event.button)
        if (Input.mouseButtons["" + event.button] != true)
          Input.mouseButtonsDown["" + event.button] = true;
        Input.mouseButtons["" + event.button] = true;
      }
  
      function mouseup(event) {
        //console.log("Mouse Up: " + event.button)
        if (Input.mouseButtons[event.button] != false)
          Input.mouseButtonsUp[event.button] = true;
        Input.mouseButtons[event.button] = false;
      }
  
      function mousemove(event) {
        //console.log("Mouse Move: " + event.clientX + ", " + event.clientY)
        Input.mousePositionX = event.clientX;
        Input.mousePositionY = event.clientY;
      }
  
      function wheelevent(event) {
        //console.log("Scroll Delta: " + event.deltaY)
        if (event.deltaY != 0)
          Input.mouseScrollDelta = event.deltaY;
      }
  
      function keypress(event) {
        //console.log(`Keys: ${event.key}, Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
      }
  
      // Based on https://stackoverflow.com/questions/381795/how-to-disable-right-click-context-menu-in-javascript
      // Kills the right mouse context menu
      function contextmenu(event) {
        if (event.preventDefault != undefined)
          event.preventDefault();
        if (event.stopPropagation != undefined)
          event.stopPropagation();
        return false;
      }
    }
  }
  
  export default Input;