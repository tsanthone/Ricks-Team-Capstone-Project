// A class for all types of constant values that are accessed throughout the code.

class LensesToggle
{
    static sceneLensToggle = false;
    static timeLensToggle = false;
    static inputLensToggle = false;



    reset()
    {
        sceneLensToggle = false;
        timeLensToggle = false;
        inputLensToggle = false;
    }
}

export default LensesToggle;