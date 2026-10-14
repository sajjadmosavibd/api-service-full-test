
function AddUser(){

    return(
        <form>
        <label htmlFor="add-username"> enter username : </label>
        <input id="add-username" placeholder="sajjad ..." />
        <br />
        <br />
        <label htmlFor="add-password"> enter password : </label>
        <input id="add-password" placeholder="123sd ..." />
        <br />
        <br />
        <label htmlFor="add-gender"> enter gender : </label>
        <input id="add-gender" placeholder="male/female ..." />
        <br />
        <br />
        <label htmlFor="add-age"> enter age : </label>
        <input id="add-age" placeholder="22 ..." />
        <br/>
        <br/>
        <button type="submit"> Submit !</button>
        </form>
    )
}

export default AddUser