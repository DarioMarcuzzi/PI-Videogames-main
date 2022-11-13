import {GET_ALL_VIDEOGAMES , GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_BY_ID,GET_VIDEOGAMES_BY_FILTER,GET_VIDEOGAMES_BY_ORDEN,RESET_FILTER,GET_PLATFORMS} from '../components/actions/index.js'

const initialState = {
  allVideoGames: [],
  copiaVideoGames: [],
  videoGameById: {},
  filterActived : false,
  orden: "",
  filtro: "",
  plataforms: []

}

export default function rootReducer( state = initialState, action){
  switch(action.type){
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        copiaVideoGames: action.payload
      }
    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        allVideoGames: action.payload
      }
    case GET_VIDEOGAMES_BY_ID:
      return {
        ...state,
        videoGameById: action.payload
      }
    case RESET_FILTER:
      if(state.filterActived){
      return {
        ...state,
        filterActived:false,
        orden: "",
        filtro: ""
      }
    }else{
      return {
        ...state,
        filterActived:true,
        orden: "",
        filtro: ""
      }
    } 

    
    case GET_VIDEOGAMES_BY_FILTER:
      if(state.filterActived) {
        switch (action.payload) {
          case "Created":
            return {
              ...state,
              allVideoGames: state.copiaVideoGames.filter((game) => game.createdInDb),
              filtro: action.payload
            }
          
          case "Api":
            return {
              ...state,
              allVideoGames: state.copiaVideoGames.filter((game) => !game.createdInDb),
              filtro: action.payload
            }
          default:
            return state
        
      }
    }else{
      switch (action.payload) {
        case "Created":
          return {
            ...state,
            allVideoGames: state.copiaVideoGames.filter((game) => game.createdInDb),
            filterActived: true,
            filtro: action.payload
          }
        
        case "Api":
          return {
            ...state,
            allVideoGames: state.copiaVideoGames.filter((game) => !game.createdInDb),
            filterActived: true,
            filtro: action.payload
          }
        default:
          return state
      }

      }
    case GET_VIDEOGAMES_BY_ORDEN:
        if(state.filterActived){
          switch (action.payload) {
            case "A-Z":
              const copiaAZ = state.allVideoGames.sort((a,b) => {
                if(a.name > b.name){
                  return 1
                }
                if(a.name < b.name){
                  return -1
                }
                return 0
              })
              return {
                ...state,
                 allVideoGames: copiaAZ,
                 orden: action.payload
              }

            case "Z-A":
              const copiaZA = state.allVideoGames.sort((a,b) => {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              })
              return {
                ...state,
                allVideoGames: copiaZA,
                orden: action.payload
                  
                
              }
            
            case "max":
              console.log("entroo")
              return {
                ...state,
                allVideoGames: state.allVideoGames.sort((a, b) => {
                  if (a.rating < b.rating) {
                    return 1;
                  }
                  if (a.rating > b.rating) {
                    return -1;
                  }
                  return 0;
                }),
                orden: action.payload

              }
              case "min":
                
                return {
                  ...state,
                  allVideoGames: state.allVideoGames.sort((a, b) => {
                    if (a.rating > b.rating) {
                      return 1;
                    }
                    if (a.rating < b.rating) {
                      return -1;
                    }
                    return 0;
                  }),
                  orden: action.payload
                }
              
            
            default:
              return state
          }
        }
        else{
          switch (action.payload) {
            case "A-Z":
              return {
                ...state,
                allVideoGames: state.copiaVideoGames.sort((a, b) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
                }),
                filterActived: true,
                orden: action.payload
              }
            case "Z-A":
              return {
                ...state,
                allVideoGames: state.copiaVideoGames.sort((a, b) => {
                  if (a.name < b.name) {
                    return 1;
                  }
                  if (a.name > b.name) {
                    return -1;
                  }
                  return 0;
                }),
                filterActived: true,
                orden: action.payload
              }
              case "max":
              
                return {
                  ...state,
                  allVideoGames: state.allVideoGames.sort((a, b) => {
                    if (a.rating < b.rating) {
                      return 1;
                    }
                    if (a.rating > b.rating) {
                      return -1;
                    }
                    return 0;
                  }),
                  filterActived: true,
                  orden: action.payload
  
                }
              case "min":
                
                return {
                  ...state,
                  allVideoGames: state.allVideoGames.sort((a, b) => {
                    if (a.rating > b.rating) {
                      return 1;
                    }
                    if (a.rating < b.rating) {
                      return -1;
                    }
                    return 0;
                  }),
                  filterActived: true,
                  orden: action.payload
                }
              default:
                return state

          }
          
        }
        case GET_PLATFORMS:
            return {
              ...state,
              plataforms: action.payload
            }
            
    default:
      return state
  }
}