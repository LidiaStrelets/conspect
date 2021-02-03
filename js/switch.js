const signup = 'сапр';
switch (signup) {
    case 'base':
        console.log('У Вас базовая подписка');
        break;
    case 'fool':
        console.log('У Вас полная подписка');
        break;
    case 'pro':
        console.log('У Вас расширенная подписка');
        break;
    case 'star':
        console.log('У Вас безлимитная подписка');
        break;
    default: 
        console.log('Оформите подписку, у Вас нет доступа');
}