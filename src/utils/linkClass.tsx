export const linkClass = (style: string, animationOrder: number) => {
    const animationClass = `animate-fadeUp-${animationOrder}`;
    return `${animationClass} ${style}`;
}