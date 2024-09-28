function calculateRhombusArea(){
    const d1 = getInputValue('Rhombus-d1');
    const d2 = getInputValue('Rhombus-d2');

    const area = 0.5 * d1 * d2;
    setInnerText('Rhombus-area');
}