export const mainStyle = {
  width: '550px',
  paddingTop: '50px',
  color: 'midnightblue',
  font: '1.5em "Roboto Slab", serif',
  fontWeight: '300',
  borderRadius: '3px'
}

/*****************************************/
/* Top Container                         */
/*****************************************/

export const topContainerStyle = {
}

/*****************************************/
/* Timer                                 */
/*****************************************/

export const timerStyle = {
  position: 'relative',
  width: '100%',
  margin: '0% 0% 0% 23%',
  zIndex: '-2'
}

export const digitStyle = {  
  float: 'left',
  minWidth: '40px',

  font: '700 5em "Roboto Slab", sans-serif',
  color: 'crimson'
}

export const colonStyle = {
  float: 'left',
  minWidth: '15px',
  padding: '15px',
  font: '3em Impact'
}

/*****************************************/
/* Current Task                          */
/*****************************************/

export const currentTaskStyle = {
  marginTop: '10%'
}

export const currentTitleStyle = {
  float: 'left',
  margin: '0% 0% 0% 7%',

  color: 'gold',
  fontSize: '2.5em',

  ":hover": {
    cursor: 'default'
  }
}

export const subtaskStyle = {
  padding: '0px',
  margin: '1% 0% 0% 7%',
  
  fontSize: '0.8em',
  color: 'beige',
  textAlign: 'left'
}

/*****************************************/
/* Task List                             */
/*****************************************/

export const taskListStyle = {
  padding: '5% 0%'
}

export const taskBtnStyle = {
  float: 'left',
  width: '17%',
  fontSize: '0.8em'
}

export const taskTitleStyle = {
  float: 'left',
  overflow: 'hidden',
  minHeight: '2em',
  margin: '0% 3% 0% 0%',
  padding: '0%',

  textAlign: 'left',
  color: 'beige',
  ":hover": {
    cursor: 'default'
  }
}

/*****************************************/
/* Create Task                           */
/*****************************************/

export const newTaskItemStyle = {
  ":hover": {
    cursor: 'pointer'
  }
}

export const titleFieldStyle = {
  fontSize: '1.4em',
  width: '75%',
  padding: '5px'
}

export const subtaskFieldStyle = {
  fontSize: '0.8em',
  width: '75%',
  padding: '5px'
}

/*****************************************/
/* Marks                                 */
/*****************************************/

export const markContainerStyle = {
  float: 'left',
  paddingLeft: '5%',
  minWidth: '20%',
  maxHeight: '78px',
  
  color: 'midnightblue'
}

export const completionMarkStyle = {
  position: 'relative',
  float: 'none',
  minWidth: '21px',
  fontSize: '1.5em'
}

/*****************************************/
/* Button                                */
/*****************************************/

export const selectBtnStyle = {
  width: '36%',
  height: '200px',
  zIndex: '2',
  position: 'relative',
  textAlign: 'center',
  paddingTop: '20%',
  margin: '0% 0% 0% 20%',
  
  color: 'beige',
  letterSpacing: '1.5px',
  fontSize: '0.8em',

  border: '3px solid midnightblue',
  borderRadius: '3px',
  backgroundColor: 'initial',

  ":hover": {
    cursor: 'pointer',
    color: 'midnightblue',
    border: '5px solid gold'
  }
}

export const toolBtnStyle = {
  float: 'left',

  color: 'beige',
  fontSize: '1em',

  border: 'none',
  backgroundColor: 'midnightblue',
  transition: 'background-color 200ms, color 200ms',

  ":hover": {
    cursor: 'pointer',
    backgroundColor: 'gold',
    color: 'midnightblue',
    transition: 'background-color 200ms, color 200ms'
  }
}

export const disabledBtnStyle = {
  float: 'left',

  color: 'lightgray',
  fontSize: '1em',

  border: 'none',
  backgroundColor: 'gray',
  cursor: 'default'
}

export const IconStyle = {
  fontSize: '1.2em',

  backgroundColor: 'initial',
  borderRadius: '50%'
}

/*****************************************/
/* General                               */
/*****************************************/

export const hideStyle = {
  display: 'none'
}

export const bound = {
//  border: '3px solid midnightblue',
//  borderRadius: '3px',
  padding: '5px'
}

export const underlineStyle = {
  width: '80%',
  borderBottom: '2px solid midnightblue'
}
