---
title: '[cpp]自定义头文件'
date: 2024-02-21 19:01:33
tags: [cpp,自定义头文件,工具文件]
categories: toolCode
---
# 代码
```cpp cypress.h mark:1
// 改文件创建于2024/2/12
// 自写的api名称均带有_cps后缀 cp(res)s

// 目录：
// 计时器
// 二叉树
// 链表
#include <iostream>
#include <chrono>
#include <thread>
#include <queue>
#include <vector>
#include <functional>
#include <string>
using namespace std;

// 计时器
struct timer_cps
{
    chrono::time_point<chrono::high_resolution_clock> start, end;
    chrono::duration<float> duration;
    timer_cps()
    {
        start = chrono::high_resolution_clock::now();
    }
    ~timer_cps()
    {
        end = chrono::high_resolution_clock::now();
        duration = end - start;
        float time = duration.count() * 1000.0f;
        cout << "\nTime took " << time << "ms\n";
    }
};

// LEETCODE风格树节点
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

// 层序创建二叉树
class tree_cps
{
private:
    TreeNode *root;
public:
    tree_cps(vector<string> nums)
    {
        if (nums.empty())
            return;
        queue<TreeNode *> store;
        root = new TreeNode(stoi(nums[0]));
        store.push(root);
        for (int i = 1; i < nums.size(); i += 2)
        {
            auto cur = store.front();
            if (nums[i] != "null")
            {
                int num = stoi(nums[i]);
                TreeNode *node = new TreeNode(num);
                cur->left = node;
                store.push(node);
            }
            if (i + 1 < nums.size() && nums[i + 1] != "null")
            {
                int num = stoi(nums[i + 1]);
                TreeNode *node = new TreeNode(num);
                cur->right = node;
                store.push(node);
            }
            store.pop();
        }
    }
    ~tree_cps()
    {
        std::function<void(TreeNode *)> dele_LO = [&](TreeNode *node) -> void
        {
            if (!node)
                return;
            dele_LO(node->left);
            dele_LO(node->right);
            delete node;
        };
        dele_LO(this->root);
        root = nullptr;
    }
    void print_cps()
    {
        queue<TreeNode *> store;
        store.push(this->root);
        cout << "\nTREE_PRINT : \n";
        while (!store.empty())
        {
            auto getF = store.front();
            if (getF)
            {
                cout << getF->val << "  ";
                store.push(getF->left);
                store.push(getF->right);
            }
            store.pop();
        }
    }
    TreeNode *get_root_cps() { return root; }
};

// LEETCODE风格链表
// Definition for singly-linked list.
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
class list_cps{
private:
    ListNode* head;
    ListNode* tail;
public:
    list_cps(vector<int> nums){
        this->head = new ListNode(nums[0]);
        tail = head;
        for(int i = 1; i < nums.size();i++){
            ListNode* temp = new ListNode(nums[i]);
            tail->next = temp;
            tail= temp;
        };
    }
    ~list_cps(){
        ListNode* temp = head;
        function<void(ListNode*)> helper = [&](ListNode* node){
            if(!node)return;
            helper(node->next);
            printf("1");
            delete node;
        };
        helper(temp);
        head = tail = nullptr;
    }
    void print_cps(){
        ListNode* temp = head;
        cout << "\nLIST_PRINT : \n";
        while(temp){
            cout<<temp->val<<"  ";
            temp=temp->next;
        };
    }
    ListNode* get_head_cps(){return head;}
    ListNode* get_tail_cps(){return tail;}
};
```
# 日志
「工具文件(cypress.h)修改日志」

2024/2/12
创建文件，并写入了第一个对象，cps_timer，该对象功能用来记时
写入：
timer_cps 计时器
力扣风格的TreeNode

2024/2/16
写入：
力扣风格的ListNode