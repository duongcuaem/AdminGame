export default class UserCondition {
  public ids?: number[] | null
  public siteIds?: number[] | null
  public articleIds?: number[] | null
  public categoryIds?: number[] | null
  public publishTypes?: number[] | null
  public title?: string | null
  public code?: string | null
  public keywords?: string | null
  public description?: string | null
  public types?: number[] | null
  public features?: string | null
  public taxonomy?: string | null
  public language?: string | null
  public status?: number[] | null
  public createdBys?: number[] | null
  public createdFrom?: string | null
  public createdTo?: string | null
  public systemStatus?: number[] | null

  constructor(data: Partial<UserCondition> = {}) {
    Object.assign(this, data)
  }

  public set(data: Partial<UserCondition>): UserCondition {
    Object.assign(this, data)
    return this
  }

  public reset(): void {
    //@ts-ignore
    Object.keys(this).forEach(key => (this[key as keyof this] = null))
  }
}
