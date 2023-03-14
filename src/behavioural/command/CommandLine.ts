import Command from "./interfaces/Command";

export default class CommandLine {
  run(command: Command) {
    command.execute();
  }
}