import { FETCH_COMPANY_REQUEST, FETCH_COMPANY_SUCCESS, FETCH_COMPANY_FAILURE, FETCH_COMPANY_DETAILS } from "./actionsConstants";
import axios from "axios";

const fetchRequest = (payload)=>{
    return {
        type: FETCH_COMPANY_REQUEST,
        payload: payload
    }
}

const fetchSuccess = (payload)=>{
    return {
        type: FETCH_COMPANY_SUCCESS,
        payload: payload
    }
}

const fetchFailure = (payload)=>{
    return {
        type: FETCH_COMPANY_FAILURE,
        payload: payload
    }
}

const fetchCompanyDetails = (payload) => {
    return {
        type: FETCH_COMPANY_DETAILS,
        payload: payload
    }
}

export const searchCompany = (query) => dispatch => {

    dispatch(fetchRequest())

    const config = {
        method: "get",
        url: "http://localhost:8000/companies",
        params: {
            q: query
        }
    }

    return axios(config)
        .then((res)=>{
            dispatch(fetchSuccess(res.data))
        })
        .catch((err)=>dispatch(fetchFailure('Somthing went wrong')))
}

export const getCompanyReviews = (payload) => dispatch => {
    
    axios.get(`http://localhost:8000/companies?id=${payload}`)
        .then((res) => {
            dispatch(fetchCompanyDetails(res.data[0]))
        } )
        .catch((err) => console.log(err))
}