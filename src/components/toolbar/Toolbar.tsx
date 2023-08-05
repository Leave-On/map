// import { FC } from "react"

// export const Toolbar: FC = () => {

//     const routes = [
//         {name: 'Маршрут №1', points: ['59.84660399, 30.29496392', '59.82934196, 30.42423701', '59.83567701, 30.38064206']},
//         {name: 'Маршрут №2', points: ['59.82934196, 30.42423701', '59.82761295, 30.41705607', '59.84660399, 30.29496392']},
//         {name: 'Маршрут №3', points: ['59.83567701, 30.38064206', '59.84660399, 30.29496392', '59.82761295, 30.41705607']}
//     ]

//     return (
//         <div className={cls.}>
//             {routes.map(route => (
//                 <div key={route.name}>{route.name}</div>
//             ))}
//         </div>

//     )
// }
import cls from "./Toolbar.module.scss";
import React from "react";
import { Radio, Space } from "antd";

export const Toolbar: React.FC = () => {

        const routes = [
        {name: 'Маршрут №1', points: ['59.84660399, 30.29496392', '59.82934196, 30.42423701', '59.83567701, 30.38064206']},
        {name: 'Маршрут №2', points: ['59.82934196, 30.42423701', '59.82761295, 30.41705607', '59.84660399, 30.29496392']},
        {name: 'Маршрут №3', points: ['59.83567701, 30.38064206', '59.84660399, 30.29496392', '59.82761295, 30.41705607']}
    ]
  return (
    <div className={cls.toolbar}>
      <h2>Select route</h2>
      <Radio.Group
        defaultValue="Маршрут №1"
        buttonStyle="solid"
        style={{ marginTop: 16 }}
      >
        <Space direction="vertical" align="center">
            {routes.map(route => (
                <Radio.Button value={route.name} key={route.name}>{route.name}</Radio.Button>
            ))}
          {/* <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button> */}
        </Space>
      </Radio.Group>
    </div>
  );
};
