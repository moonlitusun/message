export function debounceTransformer(fn: any, time: any = 2000): Function {
  let immediate = true;
  return function func(...args): Function | boolean {
    if (immediate) {
      immediate = false;
      setTimeout(() => {
        immediate = true;
      }, time);
      return fn.apply(this, args);
    }
    return false;
  };
}

export function debounce(time: number = 2000): Function {
  return function debounceDecorator(target, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const desc: PropertyDescriptor = descriptor;
    desc.value = debounceTransformer(desc.value, time);
    return descriptor;
  };
}
