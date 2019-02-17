# ![Star Wars Logo](https://vignette.wikia.nocookie.net/logopedia/images/6/6c/Star_Wars_Logo.svg/revision/latest/scale-to-width-down/634?cb=20160406191633)

## Lab 33 - Remote APIs

### Author: Matt McQuain, et al.

### Links and Resources

- [Repo](https://github.com/mattoattacko/lab-33-Remote-api)
- [Assignment](https://codesandbox.io/s/rz8zxo9rn)
- [Front End](https://rz8zxo9rn.codesandbox.io/#)

### Modules

#### `index.js`

##### Exported Values and Methods

###### `CLASS Main`

--> App Component

- Our application component is wrapped by the store.
- This allows our entire program to have acess to Redux functionality.

#### `app.js`

##### Exported Values and Methods

###### `CLASS App`

<-- props is given

--> GetPeople Component, PeopleList Component, Modal Component

- Our application class is able to manage each component that makes up the app design.

###### `mapStateToProps()`

<-- store

--> people, person

###### `mapDispatchToProps()`

<-- dispatch, getState

--> get, getPerson

#### `lib/utils.js`

##### Exported Values and Methods

###### `fetchData()`

<-- URL

--> Superagent get request: results.body

#### `components/getPeople.js`

##### Exported Values and Methods

###### `getPeople()`

<-- props

--> header

###### `mapStateToProps()`

<-- store

--> people, person

###### `mapDispatchToProps()`

<-- dispatch, getState

--> get, getPerson

#### `components/peopleList.js`

##### Exported Values and Methods

###### `peopleList()`

<-- props

--> ul: Grabs the names from the StarWars API

###### `mapStateToProps()`

<-- store

--> people, person

###### `mapDispatchToProps()`

<-- dispatch, getState

--> get, getPerson

#### Bugs

- I could not get the initial design of the application to correctly import/utilize the SW API. As such, I switched to another method presneted to me, which seemed to work.
- Further editing is required to merge the two design ideas.

#### UML

Link to an image of the UML for your application and response to events
