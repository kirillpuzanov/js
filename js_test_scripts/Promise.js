//? Promise (обещание) – это объект. Используется для отложенных и асинхронных операций, чтобы не останавливать выполнение основного потока кода.
//3 состояния Promise:   -pending; - fulfilled; -rejected /   либо выделяют 2 - pending; fulfilled;
//Promise меняет состояние только 1 раз !!!

//Методы Promise … (статические методы класса ) : 
//- .all принимает массив промисов и возвращает промис, который ждёт, пока все переданные промисы завершатся, возвращая  массив их результатов.
//- .race принимает массив промисов и возвращает промис, в котором будет только первый успешно выполнившийся промис из переданного списка
//-.allSettled принимает массив промисов и возвращает промис, который исполняется когда все полученные промисы завершены 
// (не важно с каким результатом).Содержит массив результатов всех промисов в виде
// [
//{status: ’fulfilled’, value: {результат  resolve}  },
//{{status: ’rejected’, reason : {результат  reject -  error}  }
//]

//-resolve функция в результате успеха промиса, принимает callback, где аргумент - то чем зарезолвился промис
//-reject функция в результате ошибки промиса, принимает callback, где аргумент объект ошибки

//Методы (экземпляра объекта Promise) -  Promise.prototype …. :
//-then подписка на момент исполнения промиса (чаще используется в случае resolve промиса) и позволяет нам отловить результат «резолва» промиса ). Вообще принимает 2 колбэка res и rej, но мы пользуемся res т.к для ошибок используем catch. Принимает колбэк
//Promise.then( (res)  => console.log(res: данные возвращенные успешным промисом) )

//-catch позволяет нам подписаться на промис завершившийся с ошибкой и отловить эту ошибку (результат «крэшанья» промиса ). Принимает колбэк
//Promise.catch( (error)  => console.log(error: ошибка возвращенная  упавшим промисом) )
	
//-finally Принимает колбэк без аргументов. Внутри можем описать действия, которые выполнятся после исполнения
//   промиса не важно с каким результатом.  ( Пример - убираем крутилку по завершению запроса на сервер,  неважно с каким исходом )


//! Цепочка промисов 
// Then –метод экземпляра объекта Promise, и он возвращает новый промис!!
// Внутрь которого, передаются данные зарезолвинвья или зареджектинья промиса на который подписан then
// (то что return  из промиса передается дальше вниз по цепочке как результат выполнения промиса )

// Если из промиса ничего не return,  то в следующий по цепочке промис попадет значение undefined!!!

// Если из промиса явно вернуть новый промис ( ... return Promise.resolve(data) или ... return findUserInDB(user.friend) ),
// то в следующий then попадет не сам промис котрый мы возвращали, а результат после его выполнения... в слуяае с findUserInDB(user.friend)
// в then  будет очередной user после отработки findUserInDB(user.friend)


const dataUsers = [{   id: 1,   userName: 'Kirill',  friend: 2 }, 
{id: 2,userName: 'Alex', friend: 3},
{id: 3, userName: 'Roma',friend: 4},
{ id: 4,userName: 'Sasha',friend: 5},
{id: 5,userName: 'Misha', friend: 6},
{id: 6, userName: 'Masha', friend: 1},
]


const findUserInDB = (userId) => {
  const user = dataUsers.filter(el => el.id === userId)
  return Promise.resolve(...user)
}

const lastPromise = findUserInDB(1)
  .then(user => {
    console.log(user); // { id: 1, userName: 'Kirill', friend: 2 } 
    return findUserInDB(user.friend)
  })
  .then(friendUser1=> {
    console.log(friendUser1); //  { id: 2, userName: 'Alex', friend: 3 }
    return findUserInDB(friendUser1.friend)
  })
  .then(friendUser2=> {
    console.log(friendUser2); // { id: 3, userName: 'Roma', friend: 4 } 
  })



//! Промисификация

// Быстрое
function getNumber(){
  return Promise.resolve(Math.random())
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

//Создание своего промиса 
// имитация асинхронного запроса по сохранению данных в LS

const repo = {

  save(data){
    localStorage.setItem('someKey', JSON.stringify(data))
  },

  asyncSave(data){
    const promise = new Promise((res,rej)=> {
      try {
        localStorage.setItem('someKey', JSON.stringify(data))
        res()
      } catch (error) {
        rej(error)
      }
    })
    return promise
  },

  asyncRead(){
    return new Promise(res => {
    const data = JSON.parse(localStorage.getItem('someKey'))
        if(!data) res(null)
        else res(data)
    })
  }
}

const result = repo.save({title: 'learn js'})

// result2_promise 
repo.asyncSave({title: 'learn js'})
  .then(()=> console.log('save success'))
  .catch(error=> console.log(error))

  
// async await
const run = async() => {
  let res = await repo.asyncSave({title: 'learn js'})
    try {
       console.log('save success')
    } catch (error) {
        console.log(error);
    }
}