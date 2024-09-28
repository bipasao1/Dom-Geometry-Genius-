function calculateEllipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    const area = 3.14 * a * b;
    setInnerText('ellipse-area');
}