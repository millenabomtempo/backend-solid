import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();
    const currentUser = users.find((user) => user.id === user_id);

    if (currentUser.admin === false) {
      throw new Error("Current user is not admin.");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
