package com.cmcglobal.service;

import java.util.List;

import com.cmcglobal.entity.Test;

/**
 * @author User
 *
 */
public interface TestService {

    /**
     * Create by: VuThuy - CMC
      Create date: Feb 18, 2019
      Modifier: VuThuy
      Modified date: Feb 18, 2019
      Description: ....
      Version 1.0
      @return
     */
    List<Test> findAll();

    /**
     * Create by: VuThuy - CMC
      Create date: Feb 18, 2019
      Modifier: VuThuy
      Modified date: Feb 18, 2019
      Description: ....
      Version 1.0
      @param test
     */
    void inserTest(Test test);

    /**
     * Create by: VuThuy - CMC
      Create date: Feb 18, 2019
      Modifier: VuThuy
      Modified date: Feb 18, 2019
      Description: ....
      Version 1.0
      @param id
     */
    void deleteTestID(Integer id);
}
