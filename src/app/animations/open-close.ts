import { animate, animation, state, style, transition, trigger, useAnimation } from "@angular/animations";

export const openClose = trigger('openClose', [
    state('open', style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
    state('closed', style({ height: '100px', opacity: 0.8, backgroundColor: 'blue' })),
    transition('open => closed', [animate('1s')]),
    transition('closed => open', [animate('0.5s')]),
]);
export const transitionAnimation = animation(
    [
        animate("{{time}}", style({ height: "{{height}}", opacity: "{{opacity}}", backgroundColor: "{{backgroundColor}}" }))
    ]
)
export const openCloseParametric = trigger('openClose', [
    state('open', style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
    state('closed', style({ height: '100px', opacity: 0.8, backgroundColor: 'blue' })),
    transition('open => closed', [
        useAnimation(transitionAnimation, { params: { time: '2s', height: '100px', opacity: 0.8, backgroundColor: 'blue' } })
    ]),
    transition('closed => open', [
        useAnimation(transitionAnimation, { params: { time: '1s', height: '200px', opacity: 1, backgroundColor: 'yellow' } })
    ]),
]);


