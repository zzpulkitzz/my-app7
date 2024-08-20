export default async function getData() {
    const res = await fetch("/api/vans")
    console.log(res)
    const data = await res.json()
    if(data._bodyInit==400){
        console.log("hej")
        throw {message:"Failed to fetchvans", statusText:"Bad Request",status: 400}
    }
    console.log(data)
    return data.vans
}
export async function getDataDetail(id){
    console.log(id)
    const res = await fetch(`/api/vans/${id}`)
    const data = await res.json()
    if(data._bodyInit==400){
        console.log("hej")
        throw {message:"Failed to fetchvans", statusText:"Bad Request",status: 400}
    }
    return data.vans
}