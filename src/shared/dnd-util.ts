import {DropResult} from "react-beautiful-dnd";

export function reorderedItems<T>(result: DropResult, arr: T[]): T[] | null {
    if (!result.destination) return null;

    const reorderedItems = Array.from(arr);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    return reorderedItems;
}
