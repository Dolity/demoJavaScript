setTimeout(() => {
    const width = Number(prompt("Width"));
    if (isNan(width)) {
        alert('Not a Width');
        return;
    }
    setTimeout(() => {
        const long = Number(prompt("Long"));
        if (isNan(long)) {
            alert('Not a Long');
            return;
        }
        setTimeout(() => {
            const hight = Number(prompt("Hight"));
            if (isNan(hight)) {
                alert('Not a Hight');
                return;
            }
            setTimeout(() => {
                const brownieSize = width * long * hight;
                alert('Brownie Size:' + brownieSize);
            }, 3000);
        }, 2000);
    }, 1500);
}, 1000);