---
title: 'React learning report(TS)'
date: 2024-07-19 16:01:12
tags: [React,Web,TS]
cover: https://ooo.0x0.ooo/2024/05/25/OJg0Dc.jpg
sticky: true
math: true
categories: 
- [CS,React,TS]
---



# add CSS styles
有三种方式对React组件添加自定义CSS样式  
1. external 全局添加
	> 在src下创建一个css文件，管理全部的组件的样式(如index.css)  
2. modules 模块绑定
	> 创建一个文件夹，再在里面创建组件文件以及对应的样式文件，组件文件import样式文件  
3. inline 内联绑定
	> 即在组件定义的时候使用const styles ={ color: "black",}创建样式 再由style={styles}使用  

1非常适合针对全局的模块样式管理，但是当添加的组件样式过多的时候，容易发生名称冲突，因此适合在小项目中使用。虽然2比较繁琐，但它保证了代码的易于维护。3虽然简单，但它提高了组件代码的复杂度。

# props*

即properties。其形式如：

```tsx
function Student(props: { name: string; age?: number }) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;

```

```tsx
import Student from "./Student";
function App() {
  const myAge: number = 200;
  return (
    <>
      <Student name="cypress" age={myAge} />
      <Student name="no age"></Student>
    </>
  );
}

export default App;
```

去显示props对象类型还可以通过使用PropTypes这一来自react库的一个组件，但不推荐这么写

```tsx
import PropTypes from 'prop-types'
...
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}
```

限制props类型，建议采取如下可读性更好的写法

```tsx
interface StudentProps {
    name:string;
    age:number;
}

const Student = ({name,age}:StudentProps) => {
   	return (
    	<div>
        	<p>{name}</p>
            <p>{age}</p>
        </div>
    );
};

export default Student;
```

如果参数少，还可以这样

```tsx
const Student = ({ name, age }: {
    name:string;
    age:number;
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default Student;

```

# Conditional rendering

选择渲染。

```tsx
const UserGreeting = ({
  isLogged,
  userName,
}: {
  isLogged: boolean;
  userName: string;
}) => {
  if (isLogged) {
    return <h1>Welcome back, {userName}!</h1>;
  } else {
    return <h1>Welcome Guest!</h1>;
  }
  // return isLogged ? <h1>Welcome back, {userName}!</h1> : <h1>Welcome Guest!</h1>
};

export default UserGreeting;

```

# Hook

React 通过其虚拟DOM（Virtual DOM）机制来实现组件的重新渲染。这个过程大致可以分为以下几个步骤：

1. **初始化渲染**：当组件首次渲染时，React 会根据组件的`render`方法（或函数组件的主体）生成一个虚拟DOM树。这个虚拟DOM树是一个轻量级的JavaScript对象结构，它代表了DOM的结构。
2. **状态或属性变更**：当组件的状态（`state`）或属性（`props`）发生变化时，React 会触发重新渲染的流程。
3. **生成新的虚拟DOM树**：React 会再次调用组件的`render`方法（或函数组件的主体），根据最新的状态和属性生成一个新的虚拟DOM树。
4. **虚拟DOM比较（Diffing）**：React 会将新生成的虚拟DOM树与上一次渲染时的虚拟DOM树进行比较（这个过程也称为Diffing）。React 通过这种比较，找出实际DOM需要更新的最小变更集。
5. **更新DOM**：一旦React确定了需要进行的DOM更新，它会尽可能高效地更新DOM，只修改那些实际发生变化的部分。
6. **回调函数**：在DOM更新完成后，如果有需要，React 会执行如`componentDidUpdate`或useEffect等生命周期钩子或回调函数，以便进行进一步的操作。

这个过程使得React能够以高效的方式更新DOM，避免不必要的操作，从而提高应用的性能。React的这种设计也使得开发者可以专注于状态管理，而不需要手动操作DOM。



函数组件的重新渲染会再次调用该函数。



React有个严格模式，它导致初始化时进行两次函数调用

> `StrictMode` 是一个用于检测React应用中潜在问题的工具。它并不会渲染任何可见的UI，而是为其子组件树启用额外的检查和警告。使用`StrictMode`可以帮助你在开发过程中发现不安全的生命周期、过时的API调用、意外的副作用、使用废弃方法等问题。
>
> 主要目的包括：
>
> 1. **识别不安全的生命周期**：帮助识别和警告使用了即将废弃的生命周期的组件。
> 2. **关于使用过时字符串ref API的警告**：鼓励使用回调形式的refs。
> 3. **检测意外的副作用**：在开发模式下，`StrictMode`会故意将生命周期方法调用两次，以帮助识别副作用（例如，网络请求）可能导致的问题。
> 4. **检测过时的context API**：警告过时的context API的使用。
>
> 使用`StrictMode`是一个很好的实践，特别是在开发大型应用时，它可以帮助开发者提前发现和修复潜在问题，促进使用更安全、更现代的React特性和实践。

```tsx main.tsx
  <React.StrictMode>
    <App />
  </React.StrictMode>
```

## useState()

```tsx
import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState<string | undefined>("NULL");

  const updateName = () => {
    setName("Cypress");
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>
    </div>
  );
};

export default MyComponent;

```

## useEffect()

useEffect(function,[dependencies])

- useEffect(function) 在每次有组件更新的时候，都会调用function函数
- useEffect(function,[]) 只会执行一次function
- useEffect(function,[dependencies]) 当数组内的元素有发生变化的时候，调用function

如下所示，每次data被更新的时候就会调用function，而count更新不会调用function

```tsx
import { useState, useEffect } from "react";

const MyComponent = () => {
  const [data, setData] = useState<number>(0);

  const addData = () => {
    setData((data) => data + 1);
  };

  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    document.title = `Data: ${data} |count: ${count} }`;
  }, [data]);
  return (
    <div>
      <p>data: {data}</p>
      <button onClick={addData}>clicke me</button>
      <br />
      <p>count: {count}</p>
      <button onClick={addCount}>clicke me</button>
    </div>
  );
};

export default MyComponent;

```



> Q:  函数组件在每次重新渲染的时候都会被调用，这意味着即便把useEffect的function的调用放在组件主体中，也可以实现在每次渲染的时候都能调用这个function。
>
> A: `useEffect`在 React 组件中用于处理副作用，其工作方式与将函数直接放在组件主体中有本质的不同。将函数放在组件主体中，意味着每次组件渲染时，该函数都会被调用。而 `useEffect`允许你控制这个函数调用的时机，通过依赖数组来精确控制。
>
>  以下是`useEffect`和直接在组件主体中调用函数的主要区别：
>
> 1. **控制调用时机**：
>    - **直接调用**：每次组件渲染时都会执行。
>    - **useEffect**：可以指定依赖项数组，仅在依赖项改变时执行。如果依赖项数组为空（`[]`），则仅在组件挂载时执行一次。
> 2. **副作用处理**：
>    - **直接调用**：不适合处理副作用（如数据获取、订阅设置、手动更改 DOM），因为这可能导致不必要的操作执行多次。
>    - **useEffect**：专为处理副作用设计，可以在副作用函数中返回一个清理函数，用于组件卸载时执行清理操作。
> 3. **性能优化**：
>    - **直接调用**：可能会导致性能问题，因为每次渲染都会执行，即使相关数据没有变化。
>    - **useEffect**：通过依赖项数组，可以避免不必要的副作用执行，从而优化性能。

## 组件挂载

组件挂载（Mounting）是React组件生命周期中的一个阶段。这个阶段发生在组件被创建并插入到DOM中的时候。在函数组件中，可以使用`useEffect`钩子（Hook）来模拟这个阶段的行为，通过将`useEffect`的依赖数组留空（`[]`），可以确保代码块只在组件挂载时执行一次。这个阶段是进行初始化操作，如API调用、状态设置等的理想时机。

> Q: 那么组件重新渲染的时候组件还会再次挂载吗
>
> A: 组件重新渲染的时候，组件**不会**再次挂载。组件的挂载（Mounting）只在组件第一次渲染到DOM中时发生。重新渲染可能是由于状态（state）或道具（props）的更改触发的，但这属于更新（Updating）阶段，而非挂载阶段。在更新阶段，React会重新调用组件函数来获取新的JSX，并根据需要更新DOM，但不会重新执行挂载阶段的操作。





## useRef()



useRef 即useReference，它与useState相似，但是其区别在于useState会触发渲染，而useRef不会。

下面例子展示了，useRef不会重新触发渲染，useEffect就不会多次执行，并且p标签的文本内容不会更新。可以通过控制台是否打印多次“Component mounted”来判断是否重新渲染。

```tsx 
import { useRef, useEffect } from "react";

const MyComponent = () => {
  const ref = useRef<number>(0);
  const handleClick = () => {
    ref.current += 1;
    console.log(ref.current);
  };

  useEffect(() => {
    console.log("Component mounted");
  });
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>ref.curren: {ref.current}</p>
    </div>
  );
};

export default MyComponent;

```

对HTML元素使用

```tsx
import { useRef, useEffect } from "react";

const MyComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) inputRef.current.style.backgroundColor = "red";
  };

  useEffect(() => {
    console.log("Component mounted");
  });
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;

```



 # onChange property 

`onChange`是一个React属性，用于监听表单元素（如`<input>`, `<textarea>`, 和`<select>`等）的值变化，并在每次值变化时执行指定的事件处理函数。在React中，`onChange`属性通常与组件的状态管理结合使用，以实现双向数据绑定，即将表单元素的值与组件状态同步。

> 在HTML和React中，"表单元素"通常指的是构成网页表单的HTML元素，这些元素可以接收用户输入。常见的表单元素包括：
>
> - `<input>`：用于接收用户输入，具有多种类型，如`text`、`password`、`checkbox`、`radio`、`file`等。
> - `<textarea>`：用于接收多行文本输入。
> - `<select>`：下拉列表，允许用户从多个选项中选择一个或多个。
> - `<button>`：按钮，用户可以点击执行某些操作，虽然它不直接接收用户输入，但通常与表单一起使用来提交表单数据或执行相关动作。
> - `<form>`：用于包裹其他表单元素，定义表单的范围，可以设置表单提交的行为和目标地址。



```tsx
import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState<string | undefined>("NULL");

    //event handler 事件处理器 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default MyComponent;
```

另外一个关于select元素的例子

```tsx
import { useState } from "react";

const MyComponent = () => {
  const [optionValue, setOptionValue] = useState<string | undefined>("1");
  const updateOptionValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
  };
  return (
    <div>
      <select value={optionValue} onChange={updateOptionValue}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <p>Selected value: {optionValue}</p>
    </div>
  );
};

export default MyComponent;

```

在是一个radio的例子。这是一个单选的radio组 需要对每一个radio设置checked={state === *value*}。

```tsx
import { useState } from "react";

const MyComponent = () => {
  const [state, setState] = useState<string | undefined>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          value="Confirm"
          checked={state === "Confirm"}
          onChange={handleChange}
        />
        Confirm Radio
      </label>
      <label>
        <input
          type="radio"
          value="Cancel"
          checked={state === "Cancel"}
          onChange={handleChange}
        />
        Cancel Radio
      </label>

      <p>State: {state}</p>
    </div>
  );
};

export default MyComponent;

```



# Updater function*



当你使用`setCount`这样的状态更新函数，并且传递给它一个函数作为参数时，你实际上是在使用React的函数式更新特性。这个特性允许你基于当前的状态值来计算新的状态值。这里的关键是，你传递的函数不是由你直接调用的，而是由React在更新状态时调用的。

React如何调用这个函数的步骤大致如下：

1. **触发状态更新**：当你调用`setCount((prevState) => prevState + 1)`时，React将这个函数排入更新队列。这个函数被称为更新器函数。
2. **获取当前状态**：React从组件的当前状态存储中获取`count`的最新值。这保证了无论何时调用更新器函数，它都会基于最新的状态值。
3. **调用更新器函数**：React调用你提供的更新器函数，将当前的状态值作为参数传递给它。这个函数返回计算后的新状态值。
4. **更新状态**：React接收到更新器函数返回的新状态值，并将组件的状态更新为这个新值。
5. **重新渲染组件**：状态更新后，React将重新渲染组件以反映新的状态。

这个过程的优点是，它使得状态更新可预测且避免了潜在的异步更新问题。因为React确保了每次调用更新器函数时，传递给它的状态值都是最新的。这对于处理并发状态更新尤其重要，因为它避免了因状态更新的顺序不同而导致的不一致问题。

这种模式也支持React的并发特性，如时间切片（Time Slicing）和悬停（Suspense），因为React可以根据需要推迟或重新安排状态更新，而不会丢失任何状态更新的逻辑。

```tsx
import { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1); // updater function: count => count+1
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;

```

这样可以及时的去更新state元素，因为若是直接重复调用setCount(count+1);由于count没有及时更新 count一直为0(最开始的时候)，所以最后的结果不会随着该语句的调用次数发生变化。

需要**说明**的一点是

此时setCount的参数是一个更新器函数，这意味着如上所示的参数count是函数的形参，这意味着可以由其他名称替代。同时还需要注意，这里的更新器函数的形参数量为1，而这个数量和使用的钩子有关。

> 当React调用一个更新器函数（例如，你在使用`useState`钩子时传递给`setState`的函数），它传递给这个函数的参数取决于上下文和你正在使用的特定钩子。对于最常见的`useState`钩子，React传递给更新器函数的唯一参数是当前的状态值。

下面则针对对象更新状态

```tsx
import { useState } from "react";

interface MyObject {
  name: string;
  age: number;
}
const MyComponent = () => {
  const [myObject, setMyObject] = useState<MyObject>({
    name: "cypress",
    age: 19,
  });

  const updateObject = () => {
    setMyObject({ ...myObject, name: "cypress updated" });
  };
    
  const updateObjectFucntionVer = () => {
    setMyObject(
      (prev: MyObject): MyObject => ({
        ...prev,
        name: "cypress updated via updater function",
      })
    );
  };

  return (
    <div>
      <p>{myObject.name}</p>
      <p>{myObject.age}</p>
      <button onClick={updateObject}>Update</button>
      <button onClick={updateObjectFucntionVer}>
        Update via updater function
      </button>
    </div>
  );
};

export default MyComponent;

```

数组同理。
