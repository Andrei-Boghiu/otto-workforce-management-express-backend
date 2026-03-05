type Params = {
  name: string;
};

function sayName({ name }: Params) {
  console.info(`Hi, my name is ${name}`);
}

sayName({ name: "Daniel" });
sayName({ name: 1 as unknown as string }); // hehe :)
