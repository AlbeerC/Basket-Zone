import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../Detail/Detail'
import Spinner from '../Spinner/Spinner'

function DetailContainer () {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { detailId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', detailId)
        getDoc(queryDoc)
            .then((res) => setData({ id: res.id, ...res.data() }))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) { return (<Spinner />) }

    return (
        <Detail {...data} />
    )
}

export default DetailContainer