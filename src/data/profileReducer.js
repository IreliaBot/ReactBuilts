const ADD_POST = 'ADD-POST'
const POST_CHANGE = 'POST-CHANGE'

let profileReduser = (action, state) => {
    if (action.type === ADD_POST) {
        let newPost = {
            message: state.newPostText,
            likes: 0
        }
         state.postsItems.unshift(newPost)          
        
    } else if (action.type === POST_CHANGE){
        state.newPostText = action.text
        
    }
    return state
       
    }
    
export default profileReduser 

export let addPostAC = () => {
    return {
        type:'ADD-POST',
        id: 1
}
    } 


export let onPostChangeAC = (text) => {
return {
    type:'POST-CHANGE',
    text:text
}
} 