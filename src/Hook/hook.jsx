import axios from "axios";
import {backendUrl} from '../backendUrl/backendUrl'
import { useEffect, useState } from "react";

export function useGetUrl(event) {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`${backendUrl}/${event}`);
                setData(response.data)
            } catch(error) {
                console.log('Xatolik yuz berdi', error);
            }
        }
        getData()
    }, [event])
    return data
} 