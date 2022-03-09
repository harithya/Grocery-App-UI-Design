const helper = {
    space: (index: number, marginValue = 20) => {
        if (index !== 0) {
            return {
                marginLeft: marginValue
            }
        } else {
            return undefined
        }
    }
}

export default helper