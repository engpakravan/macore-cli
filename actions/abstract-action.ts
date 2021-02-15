import { Input } from '../commands/interface.command';

export abstract class AbstractAction {
    public abstract handle(
        inputs?: Input[],
        options?: Input[],
        extraFlags?: string[],
    ): Promise<void>;
}
