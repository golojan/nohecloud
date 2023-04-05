import { Request, Response, NextFunction } from 'express'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const middleware = async (req: Request, res: Response, next: NextFunction) => {
    next()
}

export default middleware
