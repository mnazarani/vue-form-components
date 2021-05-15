let UUID = 0

export default function getUniqueID () {
    const getID = () => {
        UUID++
        return UUID
    }

    return {
        getID 
    }
}