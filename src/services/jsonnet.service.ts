
import Jsonnet from 'jsonnet';

export default class JsonnetService{
static instance(): Jsonnet{
    return new Jsonnet()
}

static evaluate(code: string): string{
    const newInstance = new Jsonnet()
    return newInstance.eval(code)
}
}