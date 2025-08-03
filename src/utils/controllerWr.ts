import { Request, Response, NextFunction } from 'express';

export interface Controller {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

interface ControllerWrapperInterface {
  (controller: Controller): (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

const controllerWrapper: ControllerWrapperInterface = controller => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default controllerWrapper;
