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

```react Student组件
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

```react
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

```react
import PropTypes from 'prop-types'
...
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}
```

限制props类型，建议采取如下可读性更好的写法

```react
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

```react
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

也就是通过if，三目运算符？等选择返回HTML内容

```react
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

## useState()

```react
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

 # onChange property 

`onChange`是一个React属性，用于监听表单元素（如`<input>`, `<textarea>`, 和`<select>`等）的值变化，并在每次值变化时执行指定的事件处理函数。在React中，`onChange`属性通常与组件的状态管理结合使用，以实现双向数据绑定，即将表单元素的值与组件状态同步。

> 在HTML和React中，"表单元素"通常指的是构成网页表单的HTML元素，这些元素可以接收用户输入。常见的表单元素包括：
>
> - `<input>`：用于接收用户输入，具有多种类型，如`text`、`password`、`checkbox`、`radio`、`file`等。
> - `<textarea>`：用于接收多行文本输入。
> - `<select>`：下拉列表，允许用户从多个选项中选择一个或多个。
> - `<button>`：按钮，用户可以点击执行某些操作，虽然它不直接接收用户输入，但通常与表单一起使用来提交表单数据或执行相关动作。
> - `<form>`：用于包裹其他表单元素，定义表单的范围，可以设置表单提交的行为和目标地址。



```react
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

```react
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

```react
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

```react
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

```react
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

数组同理
