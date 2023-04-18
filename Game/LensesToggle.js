// A class for all types of constant values that are accessed throughout the code.

class LensesToggle
{
    static sceneLensToggle = false;
    static timeLensToggle = false;
    static inputLensToggle = false;
    static velocityLensToggle = false;
    static componentLensToggle = false;
    static colliderLensToggle = false;
    static layerLensToggle = false;

    reset()
    {
        sceneLensToggle = false;
        timeLensToggle = false;
        inputLensToggle = false;
        velocityLensToggle = false;
        componentLensToggle = false;
        colliderLensToggle = false;
        layerLensToggle = false;
    }
}

export default LensesToggle;