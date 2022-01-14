module.exports = function toReadable (number) {
    const toNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const toThousand = ['', 'hundred', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const a = number + '';
    let i = a.length;
    let result = '';

    switch(i) {
        case 1:
            result = `${toNineteen[a[0]]}`;
            break;
        case 2:
            if (number > 9 && number <20) {
                result = toNineteen[number];
            } else if (a[1] === '0') {
                result = `${toThousand[a[0]]}`;
            } else{
                result = `${toThousand[a[0]]} ${toNineteen[a[1]]}`;
            }
            break;
        case 3:
            if(a[1] === '0' && a[2] === '0') {
                result = `${toNineteen[a[0]]} ${toThousand[1]}`;
            } else if(a[1] === '0') {
                result = `${toNineteen[a[0]]} ${toThousand[1]} ${toNineteen[a[2]]}`;
            } else if(a[1] === '1') {
                result = `${toNineteen[a[0]]} ${toThousand[1]} ${toNineteen[+(a.slice(1))]}`;
            } else if(a[2] === '0') {
                result = `${toNineteen[a[0]]} ${toThousand[1]} ${toThousand[a[1]]}`;
            } else {
                result = `${toNineteen[a[0]]} ${toThousand[1]} ${toThousand[a[1]]} ${toNineteen[a[2]]}`;
            }
            break;
    }

    return result;
};