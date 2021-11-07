

let store = {
     _state : {

        profilePage: {
            postsItems: [
                {message: 'Hi, world', likes: 0},
                {message: 'I`m Elon Mask, really', likes: 3},
                {message: 'Give me some bitcoins', likes: 10}
              ], 
              newPostText:'hello'
    
    
        },
        dialogsPage: {
            dialogNames: [
                {name:'Ivan Ivanov', id: 1},
                {name:'Ilon Mask', id: 2},
                {name:'Bill Gates', id: 2}
              ],
               messageItems:  [
                {message:'Hi!', id: 1},
                {message:'Go on the Mars', id: 1},
                {message:'Where is my chip?', id: 1}
              ],
              newMessageText:'Hello'
         },
         navMenu: {
            friends: [
                {ava: 1, name: 'Vasya'},
                {ava: 1, name: 'Nikita'},
                {ava: 1, name: 'Oleg'}
            ]    
          } 
           
    },
    
    
    
    addPost(postText) {
        let newPost = {
            message: postText,
            likes: 0
        }
        this._state.profilePage.postsItems.unshift(newPost)
        
        this.rerenderTree(this._state)
    },
    
    
    sendMessage (message) {
        let newMessage= {
            message: message,
            id: 4
        }
            this._state.dialogsPage.messageItems.unshift(newMessage)
            this.rerenderTree(this._state) 
        },
    onPostChange (text) {
            this._state.profilePage.newPostText = text
            this.rerenderTree(this._state)
            },
    onMessageChange (text)  {
            this._state.dialogsPage.newMessageText = text
            this.rerenderTree(this._state)
            },
    
    rerenderTree() {
            console.log('It is fake function'); 
            },
    subscribe (observer)  {
            this.rerenderTree = observer
            },
    getState(){
            return this._state
            }
}


    export default store