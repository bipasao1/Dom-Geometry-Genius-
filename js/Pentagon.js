function calculatePentagonArea(){
    const p = getInputValue('Pentagon-p');
    const b = getInputValue('Pentagon-b');

    const area = 0.5 * p * b;
    setInnerText('Pentagon-area');
}